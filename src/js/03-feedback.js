const formRef = document.querySelector('.feedback-form');
console.log(formRef);
const formData = {}

formRef.addEventListener('input', getData)




function getData(event) {
    const {name, value} = event.target   
    formData[name] = value;
    saveToLocalStorage("feedback-form-state", formData);
    
    console.log(name);
}
function saveToLocalStorage (key, value) {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };
  function loadFromLocalStorage (key) {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };
