import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function MessageConatiner() {
  const [chat, setChat] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://qa.corider.in/assignment/chat?page=${page}`
        );
        setChat((prev) => [...prev, ...data.chats]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [page]);

  const handelNextPage = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight + 1 >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div onScroll={handelNextPage} className="messageConatiner">
      {!loading ? (
        <>
          {chat.length != 0 ? (
            <div className="messages">
              <div className="date-wrapper">
                <div className="date-line">
                  <span>12 jan 2023</span>
                </div>
              </div>

              {chat?.map((item) => {
                return (
                  <div key={item.id} className="meaasgeContent">
                    <img src={item?.sender?.image} alt="sender image" />
                    <p>{item?.message}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="emptyData">
              <p>No message recvice</p>
            </div>
          )}
        </>
      ) : (
        <div className="loader">
          <CircularProgress color="success" size={30} thickness={4} />
        </div>
      )}
    </div>
  );
}

export default MessageConatiner;
