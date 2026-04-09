
export default function Home() {
  return (
    <main style={{padding:'60px 20px', textAlign:'center'}}>
      <h1 style={{fontSize:'48px', fontWeight:'600'}}>Two companies. One standard of excellence.</h1>
      <p style={{maxWidth:'700px', margin:'20px auto', color:'#555'}}>
        Vipul Life Science Limited and Lido Chem LLP operate as complementary partners — 
        combining innovation, development, and reliable chemical sourcing under one integrated platform.
      </p>

      <div style={{display:'flex', gap:'40px', justifyContent:'center', marginTop:'50px', flexWrap:'wrap'}}>

        <div style={{background:'#fff', padding:'30px', borderRadius:'16px', width:'350px'}}>
          <img src="/logos/vlsl-logo.png" style={{width:'180px'}} />
          <h2 style={{marginTop:'20px'}}>Development & Manufacturing Partner</h2>
          <p style={{color:'#555'}}>
            We develop chemistry around your needs — and deliver it at scale. 
            From process development to commercial production through trusted manufacturing partners.
          </p>
        </div>

        <div style={{background:'#fff', padding:'30px', borderRadius:'16px', width:'350px'}}>
          <img src="/logos/lido-logo.png" style={{width:'180px'}} />
          <h2 style={{marginTop:'20px'}}>Trading & Distribution Partner</h2>
          <p style={{color:'#555'}}>
            Reliable sourcing. Transparent execution. Supplying solvents and intermediates 
            with consistency, quality, and on-time delivery.
          </p>
        </div>

      </div>

      <div style={{marginTop:'80px'}}>
        <h3 style={{fontSize:'24px'}}>Integrated Capabilities. Unified Standards.</h3>
        <p style={{maxWidth:'700px', margin:'10px auto', color:'#666'}}>
          Development → Manufacturing → Supply. One relationship. Multiple capabilities.
        </p>
      </div>
    </main>
  );
}
