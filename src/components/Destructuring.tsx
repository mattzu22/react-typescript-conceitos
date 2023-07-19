
type Props = {
    title: string
    content: string
    commentsQcy: number
    tags: string[]
    //enum
    category: category;
}

export enum category{
    JS = 'JavaAcript',
    TS = 'TypeScript',
    P = 'Python'
}

const Destructuring = ({title, content, commentsQcy, tags, category}: Props) => {
  return (
    <div>
       <h2>{title}</h2>
       <p>{content}</p>
       <p>Quantidade de comentarios{commentsQcy}</p>
       <div>
        {
            tags.map(tag =>(
                <span>#{tag}</span>
            ))
        }
       </div>

       <h4>categoria: {category} </h4>
    </div>
  )
}

export default Destructuring