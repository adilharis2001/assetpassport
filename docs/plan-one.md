# **Product Requirements Document (PRD)**

**Product Name:** Asset Passport
**Hackathon Context:** This product is being developed specifically for a hackathon and aims to target relevant Web3 sponsor prize tracks. While the core concept is serious and practical, the implementation should be optimized for rapid delivery, strong demo potential, and alignment with decentralization themes. The solution should not require blockchain knowledge from end users and should focus on seamless onboarding and interaction.

---

## **1. Purpose**

Asset Passport is designed to help SMBs, contractors, and other asset-heavy operators keep a tamper-evident, verifiable record of their assets from acquisition through to disposal. The application focuses on creating transparency without adding operational complexity for the user. All blockchain interactions are abstracted away, making it possible for even a non-crypto-native user to operate the system confidently. For the hackathon, our emphasis is on delivering an end-to-end functional flow that looks polished, feels intuitive, and clearly demonstrates decentralized benefits.

---

## **2. Objectives**

The product should make asset tracking effortless, ensuring a frictionless user journey from wallet connection to asset reporting. A key requirement is that the UX feels like any modern SaaS dashboard — minimal clicks, clear data fields, and zero blockchain jargon. Every function should work within the constraints of a short hackathon timeframe, while still leaving room for future expansion. We will also include a **timeline simulation feature** to allow demo viewers to fast-forward or rewind the asset lifecycle, making changes in depreciation and status visible in real time during judging.

---

## **3. Target Users**

Our target audience includes independent contractors, small businesses managing expensive tools or vehicles, and organizations with equipment that needs periodic updates and valuations. The product should also be attractive to hackathon judges familiar with decentralized technology, as it showcases a credible, real-world Web3 use case.

---

## **4. User Onboarding and Wallet Connection**

The first user interaction starts with connecting their wallet. This should be seamless and not require manual key management or seed phrase storage. We will use an embedded wallet provider like Privy or similar so the user can log in with an email or social account. After wallet connection, the user is taken directly to the **Asset List View** within the dashboard. From here, they can see all registered assets, add new ones, or inspect the details of existing records.

---

## **5. Asset Registration**

The asset registration flow collects detailed, structured information that can be stored and processed consistently. Key fields include:

* Asset name
* Category/type
* Purchase date
* Purchase cost
* Serial number (optional)
* Country, State, City (stored in separate fields for filtering and reporting)
* Optional description
  The user can also upload supporting documents such as receipts, certificates, or photos. These are stored in a decentralized storage provider and linked to the asset record. Upon completion, registering an asset triggers an on-chain action to ensure the record is permanent and verifiable.

---

## **6. Bulk Asset Creation**

Users can upload a CSV or similar structured file to register multiple assets at once. Each row corresponds to a separate asset, with all the same fields as the single-asset form. This process should be quick to execute and provide immediate feedback on any validation issues.

---

## **7. Asset Lifecycle Events**

Lifecycle events represent meaningful changes to an asset’s status or condition. Initially, these will be user-triggered actions from the dashboard, such as:

* Inspection completed
* Maintenance performed
* Upgrade installed
* Relocation to a new site
* Disposal initiated
  While the hackathon build will focus on manual triggers, we will note that future integrations (e.g., IoT or ERP data) could automate these updates. Each event should be handled as a discrete record in the system, potentially managed by a dedicated API or contract for scalability.

---

## **8. Status Tracking**

Assets can be marked as **In-Service**, **Retired**, or **Disposed**. Status changes are both visual (updated in the dashboard) and historical (added to the lifecycle log). These changes should integrate directly with lifecycle events, meaning that an event like “Disposal initiated” would automatically update the asset’s overall status.

---

## **9. Depreciation Tracking**

When registering an asset, the user can set depreciation parameters such as useful life (in years) and salvage value. The system calculates monthly depreciation and updates the asset’s net book value (NBV) accordingly.
For the hackathon demo, the **timeline simulation** will allow us to move forward or backward in simulated time, instantly showing changes in NBV, accumulated depreciation, and other metrics. This feature helps demonstrate the practical accounting benefits of having depreciation tracked and visible on-chain.
We will assume straight-line depreciation for simplicity in the MVP, while noting that other methods could be added later.

---

## **10. Gain/Loss Reporting**

When an asset is disposed of, the user records any proceeds from the disposal and the system automatically calculates the gain or loss based on cost, accumulated depreciation, and disposal amount. This final record forms part of the asset’s permanent history.

---

## **11. Dashboard and Reporting**

The **Dashboard** is the primary landing area after login. It provides:

* **Portfolio Value**: total NBV of all assets.
* **Active Assets Count**: number of assets currently in service.
* **Security Score**: representation of how complete and verified the asset records are.
* **Daily Volume**: activity or changes recorded in the system.
* **Portfolio Performance Chart**: trends in portfolio NBV over time.
* **Asset Distribution Chart**: visual breakdown by category, location, or status.
* **Recent Activity Feed**: chronological updates of lifecycle events and status changes.
  From the dashboard, users can filter and drill down into **Assets**, run **Analytics** on depreciation and disposals, manage **Portfolio** groupings, and review **Security** settings.

---

## **12. Public Verification View**

Each asset has a unique, shareable URL displaying:

* Basic asset information
* Event history with timestamps
* Links to view supporting documents
* Verification indicators confirming the record is unchanged since creation
  This public view should be read-only and require no login, making it easy to share with auditors, buyers, or partners.