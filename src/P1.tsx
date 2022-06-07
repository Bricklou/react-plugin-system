import vendor from "./vendor";
const { useEffect } = vendor.React;

function P1() {
  useEffect(() => {
    console.log("loaded P1 component");
    console.log("rendering D1");
  });

  return <div>P1 loaded from plugin</div>;
}

export default P1;
