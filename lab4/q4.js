function fetchDataWithCallback(success, callback) {  
    setTimeout(() => {
      try {
        const isSuccess = Math.random() > 0.5; 
        if (isSuccess) {
          const data = { message: "Data fetched successfully" }; 
          callback(null, data);
        } else {
          throw new Error("Failed to fetch data.");
        }
      } catch (error) { 
        callback(error.message, null);
      }
    }, 2000); 
  }
  
  
  fetchDataWithCallback(true, (error, data) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Success:", data);
    }
  });
  
  
  fetchDataWithCallback(false, (error, data) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Success:", data);
    }
  });
  