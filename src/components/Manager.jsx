import { useRef, useState, useEffect } from 'react'
import VaultIcon from './VaultIcon'
import { v4 as uuidv4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])

  const copyText = (text) => {
    toast('Copied to Clipboard', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light"
    });
    navigator.clipboard.writeText(text)
  }


  const showpassword = () => {
    if (ref.current.src.includes("/eyeslash.svg")) {
      passwordRef.current.type = "password"
      ref.current.src = "/eye.svg"
    }
    else {
      passwordRef.current.type = "text"
      ref.current.src = "/eyeslash.svg"
    }
  }

  const savePassword = () => {
    setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
    // console.log([...passwordArray, { ...form, id: uuidv4() }])
    setform({site: "", username: "", password: "" });
    toast('Password saved!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const deletePassword = (id) => {
    let c = confirm("Do you want to delete this password")
    if (c) {
      setpasswordArray(passwordArray.filter(item => item.id != id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id != id)))
      toast('Password Deleted!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  const editPassword = (id) => {
    setform(passwordArray.filter(i => i.id === id)[0])
    setpasswordArray(passwordArray.filter(item => item.id != id))
  }


  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  // localStorage.setItem("passwords", []);

  return (
    <>
      <ToastContainer />
      <div className="mycontainer text-white">
        <div className="relative flex flex-col items-center justify-center h-48 p-6 bg-gradient-to-br from-black via-indigo-900 to-black rounded-lg shadow-lg border border-white/20 backdrop-blur-sm">
          <div className='flex gap-3'>
            <h1 className="text-4xl font-extrabold text-white tracking-wider uppercase mb-2">KeyVault</h1>
            <VaultIcon h="45" />
          </div>
          <p className="text-lg font-light text-white opacity-90 font-mono" >[  Store your keys, unlock your peace of mind  ]</p>
        </div>

        <div className="text-white flex flex-col p-4 gap-5 items-center">
          <input
            className="rounded-full px-4 py-2 w-full bg-gradient-to-r from-black  via-indigo-900 to-black text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black shadow-lg"
            type="text"
            value={form.site}
            name='site'
            onChange={handleChange}
            placeholder="Enter Website URL"
          />

          <div className="flex w-full justify-between gap-3">
            <input
              className="rounded-full w-full px-5 py-2 bg-gradient-to-r from-black to-indigo-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black shadow-lg"
              type="text"
              value={form.username}
              name='username'
              onChange={handleChange}
              placeholder="Enter your Username"
            />

            <div className="relative w-full">
              <input
                ref={passwordRef}
                className="rounded-full w-full px-5 py-2 bg-gradient-to-r from-indigo-900 to-black text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black shadow-lg"
                type="password"
                value={form.password}
                name='password'
                onChange={handleChange}
                placeholder="Enter your Password"
              />
              <span className="absolute right-2 top-2 cursor-pointer" onClick={showpassword}><img ref={ref} src="/eye.svg" /></span>
            </div>

          </div>
          <button onClick={savePassword} className='flex justify-center items-center bg-indigo-950 hover:bg-indigo-900 w-fit rounded-full px-3 py-1 gap-1 border border-purple-800'>
            <lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="hover"
              state="hover-swirl"
              colors="primary:#ffffff,secondary:#a39cf4">
            </lord-icon>
            Save Password
          </button>
        </div>
        <div className="passwords">
          {
            passwordArray.length === 0 ? (
              <h2 className='font-bold text-xl pb-1'>No Passwords to show</h2>
            ) : (
              <>
                <h2 className='font-bold text-xl m-auto pb-1'>Your Passwords</h2>
                <table className="table-auto w-full rounded-md overflow-hidden">
                  <thead className='bg-black'>
                    <tr>
                      <th className='py-2'>URL</th>
                      <th className='py-2'>Username</th>
                      <th className='py-2'>Password</th>
                      <th className='py-2'>Actions</th>
                    </tr>
                  </thead>
                  <tbody className='tab bg-indigo-950'>
                    {passwordArray.map((item) => (
                      <tr key={item.site}>
                        <td className='text-center w-32 py-2 border border-black'><div className='flex flex-row justify-center gap-4'><a href={item.site} target='_blank'>{item.site}</a><img className='cursor-pointer' onClick={() => { copyText(item.site) }} src="/copy.svg" /></div></td>
                        <td className='text-center w-32 py-2 border border-black'><div className='flex flex-row justify-center gap-4'>{item.username}<img className='cursor-pointer' onClick={() => { copyText(item.username) }} src="/copy.svg" /></div></td>
                        <td className='text-center w-32 py-2 border border-black'><div className='flex flex-row justify-center gap-4'>{item.password}<img className='cursor-pointer' onClick={() => { copyText(item.password) }} src="/copy.svg" /></div></td>
                        <td className='text-center w-32 py-2 border border-black'>
                          <span className='cursor-pointer m-1' onClick={() => { editPassword(item.id) }}>
                            <lord-icon
                              src="https://cdn.lordicon.com/oqaajvyl.json"
                              trigger="hover"
                              state="hover-line"
                              style={{ "width": "25px", "height": "25px" }}>
                            </lord-icon>
                          </span>
                          <span className='cursor-pointer m-1' onClick={() => { deletePassword(item.id) }}>
                            <lord-icon
                              src="https://cdn.lordicon.com/vlnvqvew.json"
                              trigger="hover"
                              style={{ "width": "25px", "height": "25px" }}>
                            </lord-icon>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
        </div>
      </div>
    </>
  )
}

export default Manager
