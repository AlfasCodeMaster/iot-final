import React from 'react'
import { Stage, Layer,  Text, Circle, Line } from 'react-konva';
import { useState,useEffect } from 'react';
import './css.css'

const LineGraph = () =>  {
  const orientation=[75,150,225,300,375,450,525,600,675,750]
  const [temperatureData,setTemperatureData] = useState(null)
  const [humidityData,setHumidityData] = useState(null)
  const [timeStampData,setTimeStampData] = useState(null)
  const getData = async () =>{
    try{
      fetch('https://api-cl2e.onrender.com/api/getEntry',{
        method:'GET'
      }).then(response => response.json())
      .then(data =>{
        setTemperatureData(data.temperature)
        setHumidityData(data.humidity)
        setTimeStampData(data.timeStamp)
        console.log(data.temperature)
      })
    }catch(error){
      console.error('APIden veri alma hatası:',error)
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getData()
      console.log('Action performed');
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (<>{ temperatureData!==null && humidityData!==null && timeStampData!==null &&(<div style={{"display":"flex","flexDirection":"row","marginTop":"15%"}}><Stage style={{'backgroundColor':'#222','width':"780px","marginLeft":"6rem"}} width={780} height={320}>
   <Layer x={0}>
   <Text text="Sıcaklık" fill='white' fontSize={30} x={360} y={10}/>
   <Line
   points={[orientation[0],300-temperatureData[9].temperature*6.05,orientation[1],300-temperatureData[8].temperature*6.05,orientation[2],300-temperatureData[7].temperature*6.05,orientation[3],300-temperatureData[6].temperature*6.05,orientation[4],300-temperatureData[5].temperature*6.05,orientation[5],300-temperatureData[4].temperature*6.05,orientation[6],300-temperatureData[3].temperature*6.05,orientation[7],300-temperatureData[2].temperature*6.05,orientation[8],300-temperatureData[1].temperature*6.05,orientation[9],300-temperatureData[0].temperature*6.05]}
   stroke={'gainsboro'}
   
   ></Line>
   <Circle
   x={orientation[0]}
   y={300-temperatureData[9].temperature*6.05}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[1]}
   y={300-temperatureData[8].temperature*6.05}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[2]}
   y={300-temperatureData[7].temperature*6.05}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[3]}
   y={300-temperatureData[6].temperature*6.05}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[4]}
   y={300-temperatureData[5].temperature*6.05}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[5]}
   y={300-temperatureData[4].temperature*6.05}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[6]}
   y={300-temperatureData[3].temperature*6.05}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[7]}
   y={300-temperatureData[2].temperature*6.05}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[8]}
   y={300-temperatureData[1].temperature*6.05}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[9]}
   y={300-temperatureData[0].temperature*6.05}
   radius={7}
   fill='cyan'
   ></Circle>
   <Line
   stroke='white'
   points={[50,57,50,296]}
   ></Line>
   <Line
   stroke='white'
   points={[50,295,1100,295]}
   ></Line>
   </Layer>
   <Layer>
    <Text text='40C' fontSize={15} fill='white' x={10} y={50}></Text>
    <Text text='30C' fontSize={15} fill='white' x={10} y={110}></Text>
    <Text text='20C' fontSize={15} fill='white' x={10} y={170}></Text>
    <Text text='10C' fontSize={15} fill='white' x={10} y={230}></Text>
   </Layer>
   <Layer>
    <Text text={timeStampData[9].time }fontSize={15} fill='white' x={(78*1)-22} y={304}></Text>
    <Text text={timeStampData[8].time } fontSize={15} fill='white' x={orientation[1]-22} y={304}></Text>
    <Text text={timeStampData[7].time } fontSize={15} fill='white' x={orientation[2]-22} y={304}></Text>
    <Text text={timeStampData[6].time } fontSize={15} fill='white' x={orientation[3]-22} y={304}></Text>
    <Text text={timeStampData[5].time } fontSize={15} fill='white' x={orientation[4]-22} y={304}></Text>
    <Text text={timeStampData[4].time } fontSize={15} fill='white' x={orientation[5]-22} y={304}></Text>
    <Text text={timeStampData[3].time } fontSize={15} fill='white' x={orientation[6]-22} y={304}></Text>
    <Text text={timeStampData[2].time } fontSize={15} fill='white' x={orientation[7]-22} y={304}></Text>
    <Text text={timeStampData[1].time } fontSize={15} fill='white' x={orientation[8]-22} y={304}></Text>
    <Text text={timeStampData[0].time } fontSize={15} fill='white' x={orientation[9]-22} y={304}></Text>
   </Layer>
   <Layer opacity={0.3}>
    <Line 
    stroke='white'
    points={[50,58,1200,58]}
    ></Line>
    <Line 
    stroke='white'
    points={[50,118,1200,118]}
    ></Line>
    <Line 
    stroke='white'
    points={[50,178,1200,178]}
    ></Line>
    <Line 
    stroke='white'
    points={[50,238,1200,238]}
    ></Line>
    <Line 
    stroke='white'
    points={[779,59,779,295]}
    ></Line>
   </Layer>
  </Stage>


  <Stage style={{'backgroundColor':'#222','width':"780px","marginLeft":"6rem"}} width={780} height={320}>
   <Layer x={0}>
   <Text text="Nem" fill='white' fontSize={30} x={380} y={10}/>
   <Line
   points={[orientation[0],300-humidityData[9].humidity*2.41,orientation[1],300-humidityData[8].humidity*2.41,orientation[2],300-humidityData[7].humidity*2.41,orientation[3],300-humidityData[6].humidity*2.41,orientation[4],300-humidityData[5].humidity*2.41,orientation[5],300-humidityData[4].humidity*2.41,orientation[6],300-humidityData[3].humidity*2.41,orientation[7],300-humidityData[2].humidity*2.41,orientation[8],300-humidityData[1].humidity*2.41,orientation[9],300-humidityData[0].humidity*2.41]}
   stroke={'gainsboro'}
   
   ></Line>
   <Circle
   x={orientation[0]}
   y={300-humidityData[9].humidity*2.41}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[1]}
   y={300-humidityData[8].humidity*2.41}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[2]}
   y={300-humidityData[7].humidity*2.41}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[3]}
   y={300-humidityData[6].humidity*2.41}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[4]}
   y={300-humidityData[5].humidity*2.41}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[5]}
   y={300-humidityData[4].humidity*2.41}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[6]}
   y={300-humidityData[3].humidity*2.41}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[7]}
   y={300-humidityData[2].humidity*2.41}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[8]}
   y={300-humidityData[1].humidity*2.41}
   radius={7}
   fill='cyan'
   ></Circle>
   <Circle
   x={orientation[9]}
   y={300-humidityData[0].humidity*2.41}
   radius={7}
   fill='cyan'
   ></Circle>
   <Line
   stroke='white'
   points={[50,57,50,296]}
   ></Line>
   <Line
   stroke='white'
   points={[50,295,1100,295]}
   ></Line>
   </Layer>
   <Layer>
    <Text text='%100' fontSize={15} fill='white' x={5} y={50}></Text>
    <Text text='%75' fontSize={15} fill='white' x={10} y={110}></Text>
    <Text text='%50' fontSize={15} fill='white' x={10} y={170}></Text>
    <Text text='%25' fontSize={15} fill='white' x={10} y={230}></Text>
   </Layer>
   <Layer>
    <Text text={timeStampData[9].time }fontSize={15} fill='white' x={(78*1)-22} y={304}></Text>
    <Text text={timeStampData[8].time } fontSize={15} fill='white' x={orientation[1]-22} y={304}></Text>
    <Text text={timeStampData[7].time } fontSize={15} fill='white' x={orientation[2]-22} y={304}></Text>
    <Text text={timeStampData[6].time } fontSize={15} fill='white' x={orientation[3]-22} y={304}></Text>
    <Text text={timeStampData[5].time } fontSize={15} fill='white' x={orientation[4]-22} y={304}></Text>
    <Text text={timeStampData[4].time } fontSize={15} fill='white' x={orientation[5]-22} y={304}></Text>
    <Text text={timeStampData[3].time } fontSize={15} fill='white' x={orientation[6]-22} y={304}></Text>
    <Text text={timeStampData[2].time } fontSize={15} fill='white' x={orientation[7]-22} y={304}></Text>
    <Text text={timeStampData[1].time } fontSize={15} fill='white' x={orientation[8]-22} y={304}></Text>
    <Text text={timeStampData[0].time } fontSize={15} fill='white' x={orientation[9]-22} y={304}></Text>
   </Layer>
   <Layer opacity={0.3}>
    <Line 
    stroke='white'
    points={[50,58,1200,58]}
    ></Line>
    <Line 
    stroke='white'
    points={[50,118,1200,118]}
    ></Line>
    <Line 
    stroke='white'
    points={[50,178,1200,178]}
    ></Line>
    <Line 
    stroke='white'
    points={[50,238,1200,238]}
    ></Line>
    <Line 
    stroke='white'
    points={[779,59,779,295]}
    ></Line>
   </Layer>
  </Stage>
  </div>)}</> )
}

export default LineGraph