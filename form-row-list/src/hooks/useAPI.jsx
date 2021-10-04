const useAPI = () => {
  const sendingHandler = (data) => {
    console.log(data);
  };
  return { sendingHandler };
};

export { useAPI };
