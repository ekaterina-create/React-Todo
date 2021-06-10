import React, { Component } from 'react';
import AddItemBlock from '../addItemBlock/addItemBlock';
import Header from '../header/header'
import SearchBlock from '../searchBlock/searchblock'
import TodoList from '../todoList/todolist'



class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem('Купить яхту'),
      this.createTodoItem('Погулять с котом'),
      this.createTodoItem('Изучить Реакт')
    ],
    search: '',
    filter: 'Все'
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  getIndex(todoData, id) {
    return todoData.findIndex(el => el.id === id)
  }
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const i = todoData.findIndex(el => el.id === id)
      const newArr = [...todoData.slice(0, i), ...todoData.slice(i + 1)];

      return {
        todoData: newArr,
      }
    })
  }
  toogleProperty(arr, id, propName) {

    const index = this.getIndex(arr, id)
    const oldItem = arr[index]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }
    return [
      ...arr.slice(0, index),
      newItem, ...arr.slice(index + 1)
    ];
  }
  toggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toogleProperty(todoData, id, 'done')
      }
    })
  }
  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toogleProperty(todoData, id, 'important')
      }
    })
  }
  addItem = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ]
      return {
        todoData: newArr
      }
    })

  }
  onSearch(items, search) {
    if (search.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.label.toLowerCase()
        .indexOf(search.toLowerCase()) > -1;
    })
  }
  onSearchChange = (search) => {
    this.setState({ search })
  }
  filter = (items, filter) => {
    switch (filter) {
      case "Все":
        return items
      case "Сделанные":
        return items.filter(item => item.done)
      case "Активные":
        return items.filter(item => !item.done)
      default: return items

    }
  }
  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { todoData, search, filter } = this.state;
    const visibleItems = this.filter(this.onSearch(todoData, search), filter)
    return (
      <div>
        <Header />
        <div className='container'>
          <SearchBlock onSearchChange={this.onSearchChange} filter={filter} onFilterChange={this.onFilterChange} />
          <AddItemBlock onAddItem={this.addItem} />
          <TodoList todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleDone={this.toggleDone}
            onToggleImportant={this.toggleImportant} />

        </div>
      </div>
    );
  }
}

export default App;
