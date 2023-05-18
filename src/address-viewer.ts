import {
  LitElement,
  html,
  property,
  customElement,
  css,
  internalProperty
} from "lit-element";
import { address } from "./data";
import { Address } from "./model";

@customElement("address-viewer")
class AddressViewer extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    table {
      border-collapse: collapse;
      width: 100%;
    }

    td,
    th {
      border: 1px solid gray;
      text-align: left;
      padding: 5px;
    }
  `;

  @property({ type: Number }) userId: number;
  @internalProperty() userAddress?: Address;

  constructor() {
    super();
  }

  render() {
    if (this.userAddress === undefined) {
      return html``;
    }

    return html`
      <table>
        <tr>
          <th>Country</th>
          <th>State</th>
          <th>City</th>
          <th>Street</th>
          <th>Zip Code</th>
        </tr>
        <tr>
          <td>${this.userAddress.country}</td>
          <td>${this.userAddress.state}</td>
          <td>${this.userAddress.city}</td>
          <td>${this.userAddress.street}</td>
          <td>${this.userAddress.zipCode}</td>
        </tr>
      </table>
    `;
  }

  update(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("userId")) {
      const oldValue = changedProperties.get("userId") as number;
      console.log("userId updated, newVal", this.userId, "oldVal", oldValue);
      this.loadAddress(this.userId);
    }
    super.update(changedProperties);
  }

  private async loadAddress(id: number) {
    this.userAddress = await this.getAddress(id);
  }

  private getAddress(id: number) {
    return new Promise<Address>((resolve, reject) => resolve(address[id]));
  }
}
