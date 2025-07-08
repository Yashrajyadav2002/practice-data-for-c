 export function Child2 (props){
    let {Contact,City}=props
    return (
        <>
        <h1 style={{backgroundColor:"blue"}}>THis is child 2</h1>
        <h2>my contact == {Contact}</h2>
        <h2>my city  == {City}</h2>

        </>
    )
}