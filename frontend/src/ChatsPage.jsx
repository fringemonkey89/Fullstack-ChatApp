import {MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advance'


const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('353502a4-79a4-4aa1-adc5-a533204d58c2', 
    props.user.username, props.user.secret)
    return ( <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
    )
}

export default ChatsPage;