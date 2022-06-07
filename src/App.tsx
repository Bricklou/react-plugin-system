import vendor from "./vendor";
const { useState, createElement } = vendor.React;

function App() {
  const [components, setComponents] = useState<{
    [key: string]: () => JSX.Element;
  }>((window as any).components);
  const [pluginRegistry, setRegistry] = useState<Partial<any>>({});

  return (
    <div>
      <h2>Dynamic components loading</h2>

      {Object.keys(components).map((key) => {
        return createElement(components[key], { children: key, key });
      })}
    </div>
  );
}

export default App;
