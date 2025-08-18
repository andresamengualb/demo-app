import { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Button, FormGroup, Label, Input } from 'reactstrap';
import { useRouter } from 'next/router';
import { List, CheckCircle, RefreshCw, AlertCircle } from 'react-feather';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Home = () => {
  const router = useRouter();
  const [timeframe, setTimeframe] = useState('Hoy');

  const kpis = { documents: 120, completed: 80, processing: 30, failed: 10 };
  const chartData = {
    labels: ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'],
    datasets: [
      { label: 'Exitosos', data: [30,25,28,32,31,29,35], borderColor: '#155724', backgroundColor: 'rgba(212,237,218,0.2)' },
      { label: 'Pendientes', data: [5,7,6,8,5,4,3], borderColor: '#856404', backgroundColor: 'rgba(255,243,205,0.2)' },
      { label: 'Fallidos', data: [1,2,1,0,2,1,2], borderColor: '#721c24', backgroundColor: 'rgba(248,215,218,0.2)' },
    ],
  };
  const failedDocs = Array.from({ length: 5 }, (_, i) => `DocFallido${i+1}`);
  const openTickets = Array.from({ length: 5 }, (_, i) => `TicketAbierto${i+1}`);

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h2>Hola Andrés 👋</h2>
          <p>Aquí tienes un resumen de tus documentos y tickets de soporte.</p>
        </Col>
      </Row>
      <Row className="mb-4 align-items-center">
        <Col md="3">
          <FormGroup>
            <Label>Ver:</Label>
            <Input type="select" value={timeframe} onChange={e => setTimeframe(e.target.value)}>
              <option>Hoy</option><option>Semana</option><option>Mes</option>
            </Input>
          </FormGroup>
        </Col>
        {[
          { icon: List, label:'Todos', value:kpis.documents, bg:'#e2e3e5', color:'#383d41' },
          { icon: CheckCircle, label:'Completados', value:kpis.completed, bg:'#d4edda', color:'#155724' },
          { icon: RefreshCw, label:'Procesando', value:kpis.processing, bg:'#fff3cd', color:'#856404' },
          { icon: AlertCircle, label:'Fallidos', value:kpis.failed, bg:'#f8d7da', color:'#721c24' },
        ].map((k,i) => (
          <Col md="3" key={i}>
            <Card style={{ backgroundColor:k.bg, color:k.color }} className="text-center">
              <CardBody>
                <k.icon size={24} />
                <h5>{k.label}</h5>
                <h2>{k.value}</h2>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mb-4">
        <Col>
          <Card>
            <CardBody>
              <div className="mb-3">
                <Button outline size="sm" onClick={()=>setTimeframe('Hoy')}>Hoy</Button>{' '}
                <Button outline size="sm" onClick={()=>setTimeframe('Semana')}>Semana</Button>{' '}
                <Button outline size="sm" onClick={()=>setTimeframe('Mes')}>Mes</Button>
              </div>
              <Line data={chartData} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md="6">
          <Card>
            <CardBody>
              <h5>Documentos Fallidos</h5>
              <ul>
                {failedDocs.map(d => <li key={d}>{d} <Button size="sm">Ver detalle</Button></li>)}
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardBody>
              <h5>Tickets Abiertos</h5>
              <ul>
                {openTickets.map(t => <li key={t}>{t}</li>)}
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color="primary" onClick={()=>router.push('/soporte')} className="me-2">Crear Ticket</Button>
          <Button color="primary" onClick={()=>router.push('/operaciones')} className="me-2">Ver Operaciones</Button>
          <Button color="primary">Subir Documento</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
