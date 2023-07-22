import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import InfiniteScroll from "react-infinite-scroll-component";
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar'
import verify from "../Img/verify.png"
import { styled } from '@mui/material/styles';
const SmallAvatar = styled(Avatar)(() => ({
  width: 15,
  height: 15,
  marginTop:"0.3rem"
}));

function MessageConatiner() {
  const [chat, setChat] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
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
        if (data.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [page]);






  return (
    <>
      {chat.length != 0 ? (
        <div className="messageConatiner" id="scrollableDiv">
          <InfiniteScroll
            dataLength={chat.length}
            next={() => setPage(page + 1)}
            hasMore={hasMore}
            scrollableTarget="scrollableDiv"
          >
            <div className="messages">
              <div className="date-wrapper">
                <div className="date-line">
                  <span>12 jan 2023</span>
                </div>
              </div>

              {chat?.map((item) => {
                return (
                  <>
                    {item?.sender.self === false ? (
                      <div key={item.id} className="meaasgeContent">
                        {
                         item?.sender.is_kyc_verified? (
                          <Badge
                          overlap="circular"
                          anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
                            badgeContent={<SmallAvatar alt="verify" src={verify} />}
                           >
                          <Avatar src={item?.sender?.image}
                            sx={{ width: 30, height: 30, display:"flex"}}
                           />
                         </Badge>
                         ) : (
                          <Avatar src={item?.sender?.image}
                          sx={{ width: 30, height: 30, display:"flex"}}
                         />
                         )
                        }
                        <p>{item?.message}</p>
                      </div>
                    ) : (
                      <div key={item.id} className="meaasgeContent-right">
                        <p>{item?.message}</p>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </InfiniteScroll>
          {loading && (
            <div className="loader">
              <CircularProgress color="success" size={30} thickness={4} />
            </div>
          )}
        </div>
      ) : (
        <div className="emptyData">
          <p>No message recvice</p>
        </div>
      )}
    </>
  );
}

export default MessageConatiner;
