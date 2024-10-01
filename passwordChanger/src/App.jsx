import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  // State hooks to manage the password length, and whether numbers and special characters are allowed
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook to reference the password input element
  const passwordRef = useRef(null);

  // Function to generate the password based on the selected criteria
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    // Append numbers to the character set if numberAllowed is true
    if (numberAllowed) str += "0123456789";
    
    // Append special characters to the character set if charAllowed is true
    if (charAllowed) str += "`!@#$%^&*()_+-={}[]|:;'<>,.?/~``";

    // Generate a password of the specified length
    for (let i = 0; i < length; i++) {  // Changed from <= length to < length to avoid an extra character
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    
    // Update the password state
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Function to copy the generated password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect hook to regenerate the password whenever length, numberAllowed, or charAllowed changes
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      {/* Main container */}
      <div className='w-full h-screen bg-black flex justify-center items-center'>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center'>PASSWORD GENERATOR</h1>
        
        {/* Password display and copy button */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0'>
            COPY
          </button>
        </div>

        {/* Controls for password length, allowing numbers, and allowing special characters */}
        <div className='flex text-sm gap-x-2'>
          {/* Password length slider */}
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          {/* Checkbox for allowing numbers */}
          <div className='flex items-center gap-x-1'> 
            <input 
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Checkbox for allowing special characters */}
          <div className='flex items-center gap-x-1'> 
            <input 
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;

