import { CTAPIConnection } from "../ctapi-connection";
import axios from "axios";
import { AxiosResponse } from "axios";
import { CDERuntimeConfig } from "../cde-configuration-service";

/**
 * Interface for clinical trials v1 API connections
 */
export class CTAPIConnectionV1Impl implements CTAPIConnection {
  private protocol: string;
  private hostname: string;
  private port: number;

  constructor(protocol: string, hostname: string, port?: number) {
    this.protocol = protocol;
    this.hostname = hostname;
    this.port = port;

    // Retrieve configuration data for current runtime environment.
    let configuration = new CDERuntimeConfig();
    configuration.getConfiguration();
  }

  async getRequest(path: string, params: any): Promise<any> {
    let port: string = this.port ? `:${this.port}` : "";
    let reqURL: string = `${this.protocol}://${this.hostname}${port}/v1${path}`;

    const res: AxiosResponse = await axios
      .get(reqURL, {
        params: params
      });
    return res.data;
  }

  async postRequest(path: string, body: any): Promise<any> {
    let port: string = this.port ? `:${this.port}` : "";
    let reqURL: string = `${this.protocol}://${this.hostname}${port}/v1${path}`;

    const res: AxiosResponse = await axios
      .post(reqURL, body);

    return res.data;
  }
}
