/* eslint-disable react/prop-types */
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'The Great Gatsby',
    pages: 180,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'To Kill a Mockingbird',
    pages: 281,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Man Date',
    pages: 328,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'The Catcher in the Rye',
    pages: 224,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Pride and Prejudice',
    pages: 432,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'The Hobbit',
    pages: 310,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Harry Potter',
    pages: 320,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'The Lord of the Rings',
    pages: 178,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'The Da Vinci Code',
    pages: 320,
    pv: 4800,
    amt: 2181,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ShapeChart = () => {
  return (
    <BarChart
      width={1000}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
};

const PagesToRead = () => {
    return (
        <div className='bg-slate-200'>
            <div className='p-10 mt-10'>
            <ShapeChart />
            </div>
        </div>
    );
};

export default PagesToRead;