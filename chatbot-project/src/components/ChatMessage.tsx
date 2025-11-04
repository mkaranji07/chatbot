import BotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import dayjs from 'dayjs';
import './ChatMessage.css'

type ChatMessageProps = {
    message: string;
    sender: string;
    time: string | Date;
};

function ChatMessage ({ message, sender, time }: ChatMessageProps) {
        // const message = props.message;
        // const sender = props.sender;
        // Destructuring assignment | Shortcut for above 2 lines
        // const { message, sender } = props;
        /*
        if (sender === 'bot') {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}
            </div>
          );
        }
        */
        


        return (
          <div className= {sender === 'user' 
              ? 'chat-message-user' 
              : 'chat-message-bot'
          }>
              {sender === 'bot' ? (
                <img 
                  src={BotProfileImage} 
                  className="chat-message-profile"
                />
            ) : null}
            <div 
              className="chat-message-text">
              {message}
              {/* The "time && (" check is optional. I added it just to be safe. */}
               <div className='chat-message-time'>
                 {dayjs(time).format('h:mma')}
              </div>
            
            </div>
              {sender === 'user' ? (
                <img  
                  src={UserProfileImage}
                  className="chat-message-profile"
                />
            ) : null}
          </div>
        );

       
      }
      console.log(UserProfileImage);
      export default ChatMessage;