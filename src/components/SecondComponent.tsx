
type Props = {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <h1>Meu segundo component</h1>
        <p>O nome dele é:{props.name}</p>
    </div>
  )
}

export default SecondComponent