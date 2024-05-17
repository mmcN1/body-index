'use client'

import InputForm from "./components/InputForm";
import Button from "./components/Button";
import { useState } from "react";

export default function Home() {
  const [submitForm, setSubmitForm] = useState(false);
  const [person, setPerson] = useState({ height: '', weight: '' });

  const handleSubmit = () => {
    setSubmitForm(true)
    console.log(submitForm)
  }

  const cmToMeter = person.height / 100

  const handleChange = (value, input) => {
    setPerson((prevValue) => ({
      ...prevValue,
      [value]: input
    }))
    console.log(person)
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <section className="grid grid-cols-1 gap-8 md:gap-24 md:grid-cols-2 p-14">
        <InputForm handleChange={handleChange} />
      </section>
      {!submitForm && <Button handleSubmit={handleSubmit} />}
      {submitForm && <p className="animate-[wiggle_4s_ease-in-out] ">{person.weight / (cmToMeter* cmToMeter)}</p>}
    </main>
  );
}
