<template>
<div class="hello">
  <br><br>
  <img src="./../../assets/europol-logo.png" height="60" style="margin:20px;"/>

  <h1>Europol Malware Analysis Solution</h1>
  In the wake of the takedown of a major cybercriminal group wielding banking Trojans in Ukraine in June this year, Europol noted that it “provided crucial support to the investigation since 2013 including handling and analysis of terabytes of data, and thousands of files in the Europol Malware Analysis System; handling of thousands sensitive operational messages; production of intelligence analysis reports; forensic examination of devices; organization of operational meetings and bi-monthly international conference calls.”
  <br>
  <h3>So, what is the Europol Malware Analysis System? How does it work?</h3>
  <br>
  Europol shared very few details, and simply explained that it “is a dynamic, automated malware analysis solution, which executes the sample submitted by European Union’s Member States in a tightly controlled sandbox environment.”
  <br>
  “It is used to simulate a host computer as well as an attached local area network and, to some extent, Internet connectivity,” they explained in a short Twitter post.
  <br><br>
  Motherboard has managed to get ahold of documents that describe how the system works and its ties to other ones used by the agency.
  <br>
  The Europol Malware Analysis System (EMAS) is a testing environment that is used by law enforcement cybercrime experts from the various EU Member States.
  <br><br>
  It consists of both physical and virtualized computers on which the malware is deployed and monitored. It allows the malware to do what it is created to do, and contact servers it was meant to contact (well, simulated servers, anyway), so that agents might see what the ultimate goal of the malware is, and possibly, ultimately, find a connection to the criminals behind the scheme.
  <br><br>
  The malware sample is also compared to previous ones in the EMAS database, so law enforcement agents can see whether another sample that sports the same characteristics (e.g. contacts the sam C&C server) has been spotted before and, if it has, where.
  <br><br>
  Once the malware is analyzed in depth with EMAS, the results of this analysis get also fed into:
  <br><br>
  <ul>
    <li>
      The Secure Information Exchange Network Application (SIENA), a tool that allows the operational and crime-related information and intelligence to be shared with EU Member States, Europol, and cooperating third parties
    </li>

    <li>The Europol Analysis System (EAS), the operational information system hosting data contributed by Europol’s stakeholders, and which is accessible only to Europol analysts working within specific analysis work files. The system also provides analysis tools and software. </li>
    <li>The Computer Forensic Network (CFN), which allows the extraction and analysis of crime-related information from digitised data, “while preserving its judicial validity.”</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeView',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
