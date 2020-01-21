package converter.graphical.table;

import javax.swing.table.DefaultTableModel;
import java.util.ArrayList;
import java.util.List;

/**
 * Initiates the table with some example data.
 *
 * @author Maximilian Goldacker, Marcus Gagelmann
 */
public class CsvTableModel extends DefaultTableModel {

    private final int ROWS = 1;
    private final int COLS = 1;

    private static CsvTableModel instance;

    /**
     * Initiates a table with data and column headers.
     */
    private CsvTableModel() {
        super();
        initColumns();
    }

    /**
     * Prepares the columns for the table.
     */
    private void initColumns() {

        for (int i = 0; i < COLS; i++) {
            this.addColumn(Integer.toString(i));
        }

    }

    /**
     * @return the instance of the table model
     */
    public static CsvTableModel getInstance() {
        if (instance == null) {
            instance = new CsvTableModel();
        }

        return instance;
    }

    /**
     * Loads the given CSV in the table model.
     *
     * @param data the parsed CSV
     */
    public void changeTable(String data) {
        this.setRowCount(0);

        data = data.replaceAll("\r\n", ";");

        addRow(new Object[] {data});

    }

}
