import React, { useEffect }  from "react";
import axios from '../../utils/request';

const Detail = ()=> {
    useEffect(() => {
      getData();
    }, [])
  
    const getData = async () => {
      axios.get('http://localhost:4000/api/user/2222')
        .then(function (response) {
          // 处理成功情况
          console.log(response);
        })
        .catch(function (error) {
          // 处理错误情况
          console.log(error);
        })
        .then(function () {
          // 总是会执行
        });
    }
  
    return(
        <div>detail</div>
    )
  }
  
  export default Detail;