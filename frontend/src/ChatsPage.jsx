import { PrettyChatWindow } from 'react-chat-engine-pretty'
import "./App.css";

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh', fontFamily: 'Poppins' }}>
            <PrettyChatWindow style={{ fontFamily: 'Poppins' }}
                projectId='05f2799e-6b55-4099-9860-e1ec791c4072'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100vh', fontFamily: 'Poppins' }}
            />

        </div>
    )
}

export default ChatsPage;