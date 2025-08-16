# Asset Passport Dashboard Specification

## Overview
The Asset Passport Dashboard is a comprehensive asset management platform built on blockchain technology. It provides businesses with tools to register, track, and verify their real-world assets using on-chain records and IPFS storage.

## Core Philosophy
- **Wallet-Based Authentication**: No traditional user accounts - wallet connection serves as identity
- **Blockchain-First**: All asset records stored on-chain with tamper-proof verification
- **No-Code Crypto**: Users don't need crypto knowledge - seamless Web3 integration
- **Interoperable**: Works with existing accounting systems (QuickBooks, Xero, spreadsheets)

## Navigation Structure

### Sidebar Menu
1. **Home** - Dashboard overview and metrics
2. **Register New Asset** - Single and bulk asset registration
3. **Asset Management** - View and manage all registered assets
4. **Reporting** - Analytics and timeline simulation
5. **Generate Public Verification URL** - Create public asset verification links

## Page Specifications

### 1. Home Dashboard (`/`)

**Purpose**: Landing page showing portfolio overview and key metrics

**Views**:
- Total Portfolio Value (calculated NBV of all assets)
- Asset Count by Status: In-Service / Retired / Disposed
- Depreciation Performance Graph
- Asset Distribution: by category, location, and status
- Daily Activity Feed (chronological lifecycle events)
- Tabular List of Recent Assets (pulled from Flow Registry)

**User Actions**:
- Click into asset details
- Navigate to other dashboard sections
- Quick access to register new asset

**Contract Interactions**:
- Read-only data from Flow-based asset registry
- Off-chain NBV calculations based on on-chain data

### 2. Register New Asset (`/register`)

**Purpose**: Register new assets individually or in bulk

**Manual Registration Views**:
- Asset registration form with fields:
  - Name, Type, Category
  - Purchase Date & Cost
  - Depreciation parameters (method, rate, useful life)
  - Location, Serial Number
  - Description, Notes

**Document Upload**:
- Image/PDF upload for receipts, certificates, photos
- Automatic IPFS storage with hash generation
- Preview uploaded documents

**Bulk Upload Views**:
- CSV template download
- File upload interface
- Preview parsed assets table
- Error detection and flagging for invalid rows
- Batch processing status

**User Actions**:
- Fill registration form manually
- Upload supporting documents
- Download CSV template for bulk upload
- Upload CSV file and review parsed data
- Edit errors inline before submission
- Submit individual or batch registrations

**Contract Interactions**:
- Mint new asset entries on Flow Asset Registry contract
- Store IPFS file hashes in contract metadata
- Batch processing for multiple assets

### 3. Asset Management (`/assets`)

**Purpose**: Comprehensive view and management of all registered assets

**Views**:
- Tabular view of all registered assets
- Columns: Asset Name, Type, NBV, Status, Location, Last Updated
- Advanced filtering by:
  - Location
  - Category
  - Status (In-Service/Retired/Disposed)
  - Age range
  - Depreciation remaining
- Search functionality
- Sorting capabilities

**User Actions**:
- Click into individual Asset Detail views
- Bulk select assets for actions
- Export asset data to CSV
- Filter and search assets
- Quick status updates
- Trigger lifecycle events

**Contract Interactions**:
- Read from Asset Registry smart contract
- Update asset status on-chain
- Query asset metadata and history

### 4. Asset Detail View (`/assets/[id]`)

**Purpose**: Detailed view and management of individual assets

**Views**:
- Complete asset metadata display
- Current NBV (calculated off-chain)
- Lifecycle event log with timestamps
- Uploaded documents (linked via IPFS)
- Real-time depreciation curve
- Future projection graphs
- QR code for asset identification

**User Actions**:
- Trigger new lifecycle events:
  - Maintenance performed
  - Location change
  - Status update (Retired/Disposed)
  - Value adjustment
- Update asset metadata
- Upload additional documents
- Generate public verification link
- Download asset report
- Copy shareable asset link

**Contract Interactions**:
- Read complete asset metadata from chain
- Write new lifecycle event records
- Update asset status and metadata
- Verify document hashes against IPFS

### 5. Reporting (`/reporting`)

**Purpose**: Analytics, reporting, and timeline simulation

**Analytics Views**:
- Portfolio performance over time
- Asset distribution charts (category, location, status)
- Depreciation analysis and trends
- Compliance reporting templates
- Tax-ready depreciation schedules

**Timeline Simulation**:
- Interactive date scrubber (+1 month, +6 months, +1 year)
- Projected NBV calculations
- Future depreciation schedules
- Simulated lifecycle event visualization
- "What-if" scenario planning

**Export Capabilities**:
- PDF reports generation
- CSV data exports
- Tax forms (depreciation schedules)
- Compliance reports
- Custom date range reports

**User Actions**:
- Generate various report types
- Simulate future asset values
- Export data in multiple formats
- Schedule automated reports
- Configure report templates

**Contract Interactions**:
- None (pure off-chain analytics based on on-chain data)
- Historical data aggregation from blockchain events

### 6. Generate Public Verification URL (`/verification`)

**Purpose**: Create and manage public asset verification pages

**Views**:
- Asset selection interface
- Public page preview
- Generated URL display
- QR code generation
- Access analytics (view counts, etc.)

**Public Verification Page Features**:
- Asset metadata (read-only)
- Complete lifecycle event log
- Document access via IPFS
- Tamper verification indicators
- Blockchain proof links
- Download verification certificate

**User Actions**:
- Select assets for public verification
- Customize public page appearance
- Generate shareable URLs
- Create QR codes for physical assets
- Track verification page views
- Revoke public access if needed

**Contract Interactions**:
- Read asset metadata for public display
- Verify data integrity against blockchain
- Generate cryptographic proofs

## Technical Architecture

### Blockchain Integration
- **Flow Blockchain** for asset registry smart contracts
- **IPFS** for document storage and metadata
- **ENS** for human-readable asset namespaces
- **The Graph** for efficient asset data querying

### Authentication
- **Wallet-based authentication** (Privy, Dynamic)
- No traditional user accounts
- Wallet address as user identifier

### Data Flow
1. **Registration**: User input → IPFS storage → Smart contract mint
2. **Updates**: Lifecycle events → On-chain transactions
3. **Queries**: Smart contract reads → UI display
4. **Verification**: Public access → Blockchain verification

### Off-Chain Calculations
- NBV (Net Book Value) calculations
- Depreciation schedules
- Analytics and reporting
- Timeline simulations

## Key Features

### No-Crypto UX
- Users log in like any traditional app
- No wallet setup required for basic use
- Automatic blockchain interactions behind the scenes
- Traditional business terminology (not crypto jargon)

### Integration Ready
- Works with existing accounting systems
- CSV import/export for QuickBooks, Xero
- API endpoints for third-party integrations
- Webhooks for system notifications

### Verification & Compliance
- Tamper-proof asset records
- Public verification without revealing sensitive data
- Audit trail for compliance
- Cryptographic proof of authenticity

### Scalability
- Bulk operations for large asset portfolios
- Efficient querying with The Graph
- Progressive data loading
- Optimistic UI updates

## User Personas

### Primary Users
- **SMB Owners**: Need simple asset tracking without crypto complexity
- **Accountants**: Require integration with existing workflows
- **Auditors**: Need verifiable, tamper-proof records
- **Insurance Companies**: Require proof of asset existence and value

### Use Cases
- **Asset Registration**: Digitizing physical asset records
- **Depreciation Tracking**: Automated calculations and reporting
- **Insurance Claims**: Providing verifiable asset documentation
- **Compliance Audits**: Transparent, immutable audit trails
- **Asset Transfers**: Proving ownership for sales/transfers

## Success Metrics
- Number of assets registered
- User retention and engagement
- Integration adoption rate
- Verification page views
- Time saved vs. traditional methods

This specification serves as the foundation for building a React-based Asset Passport application that brings Web3 technology to traditional asset management workflows.