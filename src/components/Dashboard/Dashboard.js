import React from "react";
import Grid from "../Containers/Grid";
import List from "../Widgets/List";
import Number from "../Widgets/Number";

const Dashboard = ({ style, configuration = [] }) => {
  return (
    <div style={style}>
      <h2 style={{ textAlign: 'left', margin: '10px' }}>Dashboard</h2>
      <div style={{ display: 'flex', margin: '10px', gap: 10 }}>
        {configuration?.columns?.map((column, index) => {
          const { size = 1, heading, widgets } = column;
          return (
            <div key={index} style={{ border: '1px solid #1565C0', padding: 10 }}>
              <h3 style={{ textAlign: 'left', marginBottom: '1em' }}>{heading}</h3>
              <Grid columns={size}>
                {widgets.map(({ title, subtitle, type, api }, widgetIndex) => {
                  return (
                    <Grid.Item key={widgetIndex}>
                      <h4 style={{ textAlign: 'left', marginBottom: '5px' }}>{title}</h4>
                      <h6 style={{ textAlign: 'left' }}>{subtitle}</h6>
                      {type === 'list' ? <List api={api} /> : type === 'number' ? <Number api={api} /> : null}
                    </Grid.Item>
                  );
                })}
              </Grid>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
