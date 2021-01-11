const gql = require("graphql-tag")

const AvailabilityTimesFragment = gql`
  fragment AvailabilityTimesFragment on AvailabilityTimes {
    mon {
      time_from
      time_to
      limit
    }
    tue {
      time_from
      time_to
      limit
    }
    wed {
      time_from
      time_to
      limit
    }
    thu {
      time_from
      time_to
      limit
    }
    fri {
      time_from
      time_to
      limit
    }
    sat {
      time_from
      time_to
      limit
    }
    sun {
      time_from
      time_to
      limit
    }
    hol {
      time_from
      time_to
      limit
    }
    e {
      dateRange {
        begin_date
        end_date
      }
      timeRanges {
        time_from
        time_to
        limit
      }
    }
  }
`;

const GastronomyOptionsFragment = gql`
  fragment GastronomyOptionsFragment on GastronomyOptions {
    __typename
    menu_only
    receipt_accept_status
    auto_accept_receipt
    hasTakeAway
    hasTableOrder
    hasRaffle
    hasDiscounts
    hasPreOrder
    hasReservation
    hasDriveIn
    hasSelfService
    hasDelivery
    tableTypes
    coming_soon
    tipPercentage
    pickupTimes
    print
    serviceInformation
    deliveryInformation
    public_key
    allowGuestRegistrationExports
    enableGuestRegistration
    orderInformation
  }
`;

const GastronomyFragment = gql`
  fragment GastronomyFragment on Gastronomy {
    __typename
    name
    username
    uuid
    street
    zip
    city
    country
    type
    lat
    lng
    place_id
    status
    phone
    email
    website
    owner_firstname
    owner_lastname
    invoice_email
    uid
    created_at
    logo_image
    header_image
    pos_status
    last_seen_at
    fee
    isActive
    isOpen
    pickup_version
    url_path_id
    opening_times {
      ...AvailabilityTimesFragment
    }
    options {
      ...GastronomyOptionsFragment
    }
    posConfig {
      pos_type
      config {
        autoAccept
        allowCancellation
        showFilterBar
        newOrderView
      }
    }
    gastronomyFee {
      title
      pp_var
      pp_fix
      pnp_var
      pnp_fix
      monthly_fix
      obono
    }
    contactConfig {
      contact_email
      contact_sms
      contact_phone
      use_email
      use_sms
    }
    unreachable_override
  }
  ${AvailabilityTimesFragment}
  ${GastronomyOptionsFragment}
`;

const ReceiptFragment = gql`
  fragment ReceiptFragment on Receipt {
    __typename
    uuid
    short_uuid
    user_uuid
    created_at
    payment_status
    payment_type
    updated_at
    payment_provider_json
    app_user_uuid
    status
    pickup_code
    pos_invoice_url
    total_price
    discount
    requested_pickup_time
    estimated_pickup_time
    charge_id
    origin {
      type
      version
      userAgent
    }
    error {
      code
      message
      productUuids
    }
    table_type
    delivery_address {
      firstname
      lastname
      note
      street
      zip
      city
      phone
    }
    phone
    email
    note
    received_at
    accepted_at
    ready_at
    completed_at
    tip_amount
    expires_at
  }
`

const AdminGetReceiptsWithGastronomyQuery = gql`
  query adminGetReceiptsWithGastronomyQuery($params: ReceiptSearchParams!) {
    adminGetReceipts(params: $params) {
      ...ReceiptFragment
      gastronomy {
        uuid
        name
        logo_image
      }
    }
  }
  ${ReceiptFragment}
`
const GetGastronomyQuery = gql`
  query getGastronomyQuery($uuid: ID!) {
    getGastronomy(uuid: $uuid) {
      ...GastronomyFragment
    }
  }
  ${GastronomyFragment}
`
module.exports = {
  AdminGetReceiptsWithGastronomyQuery,
  GetGastronomyQuery
}
