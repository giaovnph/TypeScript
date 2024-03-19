{
  const myString: string = "Anh dan be di an kem nha";
  const myAge: number = 20;
  const mySkill: string[] = ["Html", "React"];
  const mySkills: Array<string> = ["html"];
}

{
  type educationType = {
    university: string;
    GPA: number;
  };
  type cvType = {
    fullName: string;
    age: number;

    address: string;

    email: string;
    education: educationType;
  };
  const myCv: cvType = {
    fullName: "Vu Ngoc Giao",
    age: 20,
    address: "Thai Binh city",
    email: "giaovnph38004@fpt.edu.vn",
    education: {
      university: "FPT polytechnic",
      GPA: 2,
    },
  };
}
