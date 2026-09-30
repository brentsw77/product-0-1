(() => {
  const data = window.PRODUCT_DATA;
  const $ = id => document.getElementById(id);
  const fill = (id, items) => {
    const el = $(id);
    Object.entries(items).forEach(([value,item]) => {
      const o=document.createElement("option"); o.value=value; o.textContent=item.name; el.appendChild(o);
    });
  };
  fill("source",data.sources); fill("display",data.displays); fill("connection",data.connections);

  function render() {
    const input={source:$("source").value,display:$("display").value,connection:$("connection").value,resolution:$("resolution").value,refresh:$("refresh").value};
    const a=window.analyzeSetup(input,data);
    const title=a.status==="pass"?"Your chain can hit this target.":a.status==="fail"?"A link in the chain blocks this target.":"We need one more detail to verify this.";
    const action=a.status==="pass"?"No hardware purchase is indicated by these checks. Next, verify system, game, and display settings.":a.status==="fail"?`Limiting link: ${a.limiting.name}. Fix that link before buying anything else.`:"Verify the unknown link first. We won't guess when the evidence is incomplete.";
    $("result").innerHTML=`<span class="badge ${a.status}">${a.status.toUpperCase()}</span><h2>${title}</h2><p>${action}</p><div class="chain">${a.checks.map(c=>`<div class="check"><div class="check-head"><strong>${c.name}</strong><span class="badge ${c.status}">${c.status.toUpperCase()}</span></div><p>${c.detail}</p></div>`).join("")}</div><div class="why"><strong>Why this answer?</strong><p>Every link is checked separately. One failed link blocks the goal. Missing evidence stays UNKNOWN instead of being converted into a fake compatibility percentage.</p></div><div class="evidence">Prototype note: the architecture is ready for evidence URLs, per-port mode tables, HDR, VRR, bandwidth, color depth, DSC, firmware constraints, and adapters. Those are intentionally not inferred yet.</div>`;
    $("result").classList.remove("hidden");
    $("result").scrollIntoView({behavior:"smooth",block:"start"});
  }
  $("analyze").addEventListener("click",render);
})();