import React, { useState, useEffect } from "react"

function StudentsData() {


      const [students, setStudents] = useState(null);
      useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                  .then(response => response.json())
                  .then(json => setStudents(json))

      }, []);
      return (
            <div>
                  <h2>Students</h2>
                  {students && students.map((e)=>(
                        <div key={e.id}>
                              <p>{e.name}</p>
                              <p>{e.email}</p>
                        </div>
                  ))}
                  
            </div>
      )
}

export default StudentsData;
