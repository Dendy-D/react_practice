import React, { Component } from 'react'


class NameForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 'coconut'
    }

    this.handleChange = this.handleChange.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearStartValue = this.clearStartValue.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  onFocus(event) {
    event.target.focus()
  }

  handleSubmit(event) {
    event.preventDefault()
    alert(`Your review is send: ${this.state.value}`)
  }

  clearStartValue() {
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Выберите ваш любимый вкус:
          <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Грейпфрут</option>
              <option value="lime">Лайм</option>
              <option value="coconut">Кокос</option>
              <option value="mango">Манго</option>
            </select>
          </label>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    )
  }
}

export default NameForm
