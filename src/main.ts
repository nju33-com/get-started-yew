const somethingApi = {
  foo: {
    bar: 123
  }
}

;(global as any).ns = {
  get_bar() {
    return somethingApi.foo.bar
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
  const module = await import('../pkg')
  module.render_hello()
})()

export {}
