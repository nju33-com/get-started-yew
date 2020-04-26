#![recursion_limit = "256"]

use wasm_bindgen::prelude::*;
use yew::prelude::*;

struct MyComponent {}

impl Component for MyComponent {
  type Message = ();
  type Properties = ();
  fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
    Self {}
  }

  fn update(&mut self, _message: Self::Message) -> ShouldRender {
    true
  }

  fn view(&self) -> Html {
    html! {
      <div>{"Hello Yew"}</div>
    }
  }
}
#[wasm_bindgen]
pub fn render_hello() -> Result<(), JsValue> {
  yew::initialize();
  App::<MyComponent>::new().mount_to_body();
  Ok(())
}
