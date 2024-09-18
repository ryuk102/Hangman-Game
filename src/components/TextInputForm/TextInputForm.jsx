import Button from "../Button/Button"
import TextInput from "../TextInput/TextInput"

function TextInputForm({inputType,handleFormSubmit,handleTextInputChange,handleShowHideClick}){

  return(
      <form onSubmit={handleFormSubmit}>
        <div>
          <TextInput
            type={inputType}
            label="Enter a word or a phrase"
            placeholder="Enter a word or a phrase here..."
            onChangeHandler={handleTextInputChange}
          />
        </div>

        <div>
          <Button
            styleType="warning"
            text={inputType==="password" ? "show" :"hide"}
            onClickHandler={handleShowHideClick}
          />
        </div>

        <div>
          <Button
            type="submit"
            styleType="primary"
            text="submit"
          />
        </div>
      </form>
  )
}
export default TextInputForm