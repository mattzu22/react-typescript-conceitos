import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Destructuring, { category } from "./components/Destructuring";
import State from "./components/State";
import { createContext } from "react";
import Context from "./components/Context";

//type
type textOrNull = string | null;
type fixed = "isso" | "aquilo";

interface IAppContext{
  language: string
  framework: string
  project: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  //1 - variáveis
  const name: string = "Matheus";
  const age: number = 24;
  const isWorking: boolean = true;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `olá, ${name}`;
  };

  //3 - type
  const myText: textOrNull = "texto";
  const mySecondText: textOrNull = null;

  const testandoFixed: fixed = "isso"

  //4 - context

  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'next.js',
    project: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div>Olá mundo</div>
      <h2>nome:{name}</h2>
      <p>idade:{age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>

      <FirstComponent />
      <SecondComponent name={name} />
      <Destructuring
        category={category.TS}
        title="Destructuring"
        content="algum conteúdo"
        commentsQcy={10}
        tags={["ts", "js", "react", "Next.js"]}
      />

      <Destructuring
        category={category.P}
        title="Destructuring"
        content="algum conteúdo"
        commentsQcy={10}
        tags={["ts", "js", "react", "Next.js"]}
      />
      <State />
      <Context />
    </AppContext.Provider>
  );
}

export default App;
