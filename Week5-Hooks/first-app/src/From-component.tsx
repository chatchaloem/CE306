import React , {useState, useEffect} from "react";


interface FromData {
    name: string;
    email: string;
}
const UserFrom: React.FC = () => {
    const [name,setName] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [submittedData,setSubmittedData] = useState<{ name: string; email: string } | null>(null);

    useEffect (() => {
        console.log("No Dependency Effect: Component re-rendered");
        console.log(`Current name: ${name}, Current email: ${email}`);
    });

    const submit = () =>{
        setSubmittedData({name , email});
    };

    const Clear = () =>{
        setName('');
        setEmail('');
        setSubmittedData({ name: '', email: '' });
    };    

    return(

        <div style={{padding:'20px' , maxWidth:'400px' , margin:'0 auto'}}>
            <h2>User Frorm Exercise - Solution</h2>
            <br />
            <h4>Your Name: {name}</h4>
            <input style={{padding:'10px' , width:'250px',borderRadius:'10px'}}
                type="text" 
                value={name} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder = "Enter your name"
            />
            <h4>Your Email: {email}</h4>
            <input style={{padding:'10px', width:'250px' , borderRadius:'10px'}}
                type="text" 
                value={email} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <br />
            <button style={{margin:'10px 10px' , backgroundColor:'#27E36A'}} onClick={submit}>Submit</button>
            <button style={{margin:'10px 10px' , backgroundColor:'#D12A08'}} onClick={Clear}>Clear</button>

            <div style={{ marginTop: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <h3>ข้อมูลปัจจุบัน:</h3>
                {submittedData ? (
                    <>
                        <p><strong>ชื่อ:</strong> {submittedData.name || 'ยังไม่ได้กรอก'}</p>
                        <p><strong>อีเมล:</strong> {submittedData.email || 'ยังไม่ได้กรอก'}</p>
                    </>
                ) : (
                    <p>ยังไม่ได้กรอกข้อมูล</p>
                )}
            </div>
        </div>
    );
};

export default UserFrom;

