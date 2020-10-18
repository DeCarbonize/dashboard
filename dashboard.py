import plotly.express as px
import chart_studio

username = 'abbybatinga' # your username
api_key = 'XEgjxwlYgNgxnp4vbMfc' # your api key - go to profile > settings > regenerate key
chart_studio.tools.set_credentials_file(username=username, api_key=api_key)


df = px.data.stocks()
fig = px.line(df, x='date', y="GOOG")
fig.show()


# Using graph_objects
import plotly.graph_objects as go

import pandas as pd
df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv')

fig = go.Figure([go.Scatter(x=df['Date'], y=df['AAPL.High'])])
fig.show()


py.plot(fig, filename = 'dummy_graph', auto_open=True)

import chart_studio.tools as tls
tls.get_embed('https://plotly.com/~abbybatinga/3/')

df = px.data.tips()
fig = px.pie(df, values='tip', names='day', color='day',
             color_discrete_map={'Thur':'peachpuff',
                                 'Fri':'honeydew',
                                 'Sat':'mediumspringgreen',
                                 'Sun':'lavender'})
fig.show()

py.plot(fig, filename = 'dummy_pie', auto_open=True)

tls.get_embed('https://plotly.com/~abbybatinga/5/')