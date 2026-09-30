window.analyzeSetup = function(input, data) {
  const source = data.sources[input.source];
  const display = data.displays[input.display];
  const connection = data.connections[input.connection];
  const mode = input.resolution + "-" + input.refresh;
  const checks = [];

  if (source.unknown) {
    checks.push({name:"Source",status:"unknown",detail:"The PC hardware and active output port are not specified yet."});
  } else {
    const ok = source.modes.includes(mode);
    checks.push({name:"Source",status:ok?"pass":"fail",detail:ok?"The source supports the requested output mode.":"The source does not support this requested output mode."});
  }

  const displayOK = display.modes.includes(mode);
  checks.push({name:"Display",status:displayOK?"pass":"fail",detail:displayOK?"The display supports the requested mode in this prototype dataset.":"The display cannot meet this resolution + refresh target in the current dataset."});

  if (!source.nativeConnections.includes(connection.type)) {
    checks.push({name:"Connection",status:"fail",detail:source.name+" does not provide a native "+connection.name+" output in this path. An adapter would need to be modeled as another link."});
  } else if (!display.connections.includes(connection.type)) {
    checks.push({name:"Connection",status:"fail",detail:display.name+" does not accept this connection type in the current dataset."});
  } else if (connection.confidence === "unknown") {
    checks.push({name:"Connection",status:"unknown",detail:"The cable's capability is unknown. Product 0.1 will not assume it can carry the target signal."});
  } else {
    checks.push({name:"Connection",status:"pass",detail:"The connection type is compatible with both ends of this prototype path."});
  }

  const status = checks.some(x=>x.status==="fail") ? "fail" : checks.some(x=>x.status==="unknown") ? "unknown" : "pass";
  const limiting = checks.find(x=>x.status==="fail") || checks.find(x=>x.status==="unknown") || null;
  return {status, checks, limiting, source, display, connection, mode};
};
