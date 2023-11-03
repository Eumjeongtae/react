import React, { useState } from "react";
import './App.css'

export default function AppForm() {
  const [form, setForm] = useState({ name: '', email: '' });


  const handleChane = (e) => {
    const {name,value} = e.target;
    setForm({ ...form, [name]: value }); //...from 기존 데이터 유지, ...form이 빠지면 초기화 됨.
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름 :</label>
        <input type="text" name="name" id="name" value={form.name} onChange={handleChane} />
        <label htmlFor="email">이메일 :</label>
        <input type="text" name="email" id="email" value={form.email} onChange={handleChane} />
        <button>전송</button>
      </form>
    </>
  );
}