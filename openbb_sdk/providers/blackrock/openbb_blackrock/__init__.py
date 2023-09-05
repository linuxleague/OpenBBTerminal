"""Blackrock provider module."""

from openbb_provider.abstract.provider import Provider

from openbb_blackrock.models.etf_holdings import BlackrockEtfHoldingsFetcher

blackrock_provider = Provider(
    name="blackrock",
    website="https://www.blackrock.com/",
    description="""Blackrock is a financial services company and issuer of iShares ETFs.""",
    required_credentials=None,
    fetcher_dict={
        "EtfHoldings": BlackrockEtfHoldingsFetcher,
    },
)
