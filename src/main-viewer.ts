import {
  LitElement,
  html,
  customElement,
  css,
  internalProperty
} from "lit-element";
import { users } from "./data";
import { User } from "./model";
import "./address-viewer";

@customElement("main-viewer")
class MainViewer extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @internalProperty() users: User[] = [];
  @internalProperty() userId?: number;

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h1>User Address Viewer</h1>
        <span>Select a User to see the Address:</span>
        <ul>
          ${this.users.map(
            user => html`
              <li>
                <a href="#" @click="${() => this.viewAddress(user.id)}"
                  >${user.name}</a
                >
              </li>
            `
          )}
        </ul>
        <address-viewer .userId=${this.userId}></address-viewer>
      </div>
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.users = await this.getUsers();
  }

  private getUsers() {
    return new Promise<User[]>((resolve, reject) => resolve(users));
  }

  private viewAddress(id: number) {
    this.userId = id;
  }
}
