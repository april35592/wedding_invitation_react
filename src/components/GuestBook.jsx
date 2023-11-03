import { useEffect, useState } from "react";
import { styled } from "styled-components";
import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import useInput from "src/hooks/useInput";
/* db를 내보낸 경로에서 db도 import 해주어야 한다 */

const DivGuestBook = styled.div`
  width: 100%;
  margin-top: 40px;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  h4 {
    width: calc(100% - 60px);
    margin: 5px 30px;
    font-weight: 600;
    font-size: var(--fs-xxlarge);
    color: var(--black-800);
  }

  form {
    width: calc(100% - 60px);
    margin-bottom: 4px;

    input {
      height: 32px;
      border: 2px solid var(--green3);
      border-radius: 8px;
      padding: 0 4px;
    }

    input::placeholder {
      color: var(--green2);
    }

    input:first-child {
      width: 80px;
    }

    input:not(:first-child) {
      width: calc(100% - 180px);
      margin: 0 6px;
    }

    button {
      height: 32px;
      width: 80px;
      border-radius: 8px;
      background-color: var(--green3);
    }
  }

  strong {
    color: var(--green1);
  }

  & > div {
    width: 100%;
    height: calc(100% - 36px);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: left;

    & > div {
      display: flex;
      justify-content: space-between;
      margin: 5px 30px;

      p {
      }
    }
  }
`;

const GuestBook = () => {
  const [dataLog, setDataLog] = useState([]);

  const [user, userOnChange] = useInput("");
  const [message, messageOnChange] = useInput("");

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "guest_book"), orderBy("timestamp"))
    );
    querySnapshot.forEach((doc) => {
      const result = { ...doc.data(), id: doc.id };
      setDataLog((prev) => [result, ...prev]);
    });
  };

  const onClickSubmitHandler = (event) => {
    event.preventDefault();
    try {
      const postMessage = async () => {
        await addDoc(collection(db, "guest_book"), {
          user: user,
          message: message,
          timestamp: new Date(),
        });
      };
      postMessage();
      setDataLog([]);
      getMessage();
    } catch (e) {}
  };

  return (
    <DivGuestBook>
      <h4>방명록</h4>
      <form>
        <input placeholder="성함" value={user} onChange={userOnChange} />
        <input
          placeholder="메세지를 남겨주세요"
          value={message}
          onChange={messageOnChange}
        />
        <button onClick={onClickSubmitHandler}>전송</button>
      </form>
      <div>
        {dataLog.map((item) => {
          return (
            <div>
              <p key={item.id}>
                <strong>{item.user}</strong> : {item.message}
              </p>
            </div>
          );
        })}
      </div>
    </DivGuestBook>
  );
};

export default GuestBook;
