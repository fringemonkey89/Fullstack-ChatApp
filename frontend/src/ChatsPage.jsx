import { PrettyChatWindow } from 'react-chat-engine-pretty'
//import { ChatEngine } from 'react-chat-engine-advance'

const ChatsPage = (props) => {
    
    return ( 
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='353502a4-79a4-4aa1-adc5-a533204d58c2'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%' }}
        />
     </div>   
    )
}

export default ChatsPage;