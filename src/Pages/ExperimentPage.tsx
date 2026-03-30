import React, { useState } from "react";

const languages = [
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "C++", icon: "" },
];

function CodeEditorPanel() {
  const [selectedLang, setSelectedLang] = useState("Python");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput("Code executed successfully! (Mock Output)");
  };

  const saveCode = () => {
    localStorage.setItem("savedCode", code);
    alert(" Code Saved!");
  };

  return (
    <div className="bg-gray-900 text-white p-5 rounded-2xl shadow flex flex-col">

      <div className="flex gap-3 mb-4">
        {languages.map((lang) => (
          <button
            key={lang.name}
            onClick={() => setSelectedLang(lang.name)}
            className={`px-4 py-2 rounded-lg border flex items-center gap-2 transition ${
              selectedLang === lang.name
                ? "bg-indigo-700 text-white"
                : "bg-gray-800 hover:bg-gray-700 border-gray-700"
            }`}
          >
            <span>{lang.icon}</span>
            {lang.name}
          </button>
        ))}
      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full flex-1 p-4 bg-gray-800 border border-gray-700 rounded-lg font-mono text-sm mb-4 text-green-300"
        placeholder={`// Write ${selectedLang} code here`}
      />

      <div className="flex gap-4 mb-4">
        <button
          onClick={runCode}
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
        >
           Run Code
        </button>
        <button
          onClick={saveCode}
          className="bg-indigo-700 text-white px-5 py-2 rounded-lg hover:bg-indigo-800"
        >
           Save
        </button>
      </div>

      <div className="bg-black text-green-400 p-4 rounded-lg h-40 overflow-auto text-sm font-mono border border-gray-700">
        {output || "// Output will appear here"}
      </div>
    </div>
  );
}

export default function ExperimentPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-700 border-l-4 border-indigo-700 pl-3">
          Find Maximum Element
        </h1>
        <button className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800">
          ← Back
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-gray-50 p-5 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-3">Description</h2>
          <p className="text-gray-700 mb-4">
            Find the maximum element in an array.
          </p>

          <p className="mb-2">
            <span className="font-semibold">Difficulty:</span>
            <span className="ml-2 text-green-600 font-medium">Easy</span>
          </p>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Example:</h3>
            <div className="bg-gray-200 p-3 rounded-lg text-sm">
              Input: [2,7,11,15] <br /> Target = 9 <br /> Output: [0,1]
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Test Cases</h3>
            <textarea
              className="w-full p-3 border rounded-lg text-sm"
              rows={4}
              placeholder="Enter custom test cases..."
            />
          </div>
        </div>

        <CodeEditorPanel />
      </div>
    </div>
  );
}
