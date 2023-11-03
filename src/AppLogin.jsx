import React, { useState } from "react";

export default function AppLogin() {
  const [form,setForm] = useState({'id' :'','pass':''})

  const handleLoginChange = (e)=>{
    let {name , value} = e.target;
    setForm({...form,[name]:value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(form);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">아이디 :</label>
        <input type="text" name="id" id="id" value={form.id} onChange={handleLoginChange} />
        <label htmlFor="pass">패스워드 :</label>
        <input type="password" name="pass" id="pass" value={form.pass} onChange={handleLoginChange} />
        <button type = 'submit'>로그인</button>
      </form>
    </>
  );
}