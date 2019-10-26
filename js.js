const users = []
for(let K=0;K<10;K++){ 
    let randomCard = faker.helpers.createCard(); 
    randomCard['favorite'] = null
    users.push(randomCard)
}

class Test extends React.Component{
    state={
        stateUsers: users
    }

    makeFavorite = (e) =>{
        const selectedUser = this.state.stateUsers.filter(({name})=>e.target.getAttribute('name')===name)
        selectedUser[0].favorite = true;
        this.setState({...this.state.stateUsers, selectedUser})
    }


    
    render(){
        const count = this.state.stateUsers.reduce((acc,{favorite})=>{
            if(favorite){
                acc++
            }
            return acc
        },0)
        return(
            <div>
            you have {count}
            <ul>
            {
                this.state.stateUsers.map(({name, email, favorite},idx)=><User  key={idx} name={name} favorite={favorite} email={email} clickHandler={e => this.makeFavorite(e)} />)
            }
            </ul>
            </div>
        )
    }
}


const User = (props) => {
    return (
        <div onClick={props.clickHandler} name={props.name} className={`${props.favorite}`}> {props.name} {props.email}</div>  
    )
}

ReactDOM.render(
    <Test/>
    , document.getElementById('app'));