import addInvalidInputStyle from "./add_invalid_input_style";
import insertErrorMessage from "./insert_error_message";

export default function displayErrorMessage(inputEl, innerHTML) {
  addInvalidInputStyle(inputEl);
  insertErrorMessage(inputEl, innerHTML);
}