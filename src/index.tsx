// import React from "react"
import blessed from "blessed"
// import { render } from "react-blessed"
import * as dotenv from "dotenv"
// import { MemoryRouter } from "react-router"
// import { App } from "./App"
// import { ErrorBoundary } from "./ErrorBoundary"
dotenv.config();

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  sendFocus: true,
  title: "Github Manager",
  cursor: {
    color: "white", shape: "underline", artificial: true, blink: true
  } 
})

const box = blessed.box({
  top: 'center',
  left: 'center',
  width: '50%',
  height: '50%',
  content: 'Hello {bold}world{/bold}!',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 'magenta',
    border: {
      fg: '#f0f0f0'
    },
    hover: {
      bg: 'green'
    }
  }
});

screen.key(["q", "C-c"], () => process.exit(0))
screen.append(box);
screen.render();