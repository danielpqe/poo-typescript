interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): void;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 3000
// }

class PostgresDriver implements Driver {
  connect(): void {
    throw new Error('Method not implemented.');
  }
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: string
  ) {}
  disconnect(): void {
    throw new Error('Method not implemented.');
  }
  isConnected(name: string): void {
    throw new Error('Method not implemented.');
  }
}

class OracleDriver implements Driver {
  disconnect(): void {
    throw new Error('Method not implemented.');
  }
  isConnected(name: string): void {
    throw new Error('Method not implemented.');
  }
  connect(): void {
    throw new Error('Method not implemented.');
  }
  database = '';
  password = '';
  port = 20;
}
