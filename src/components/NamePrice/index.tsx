interface Props{
  name: string,
  price: string
}

export const NamePrice = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%'
      }}
    >
      <div
        style={{
          width: '60%'
        }}
      >
        {props.name}
      </div>
      <div>
       {props.price}
      </div>
    </div>
  )
}